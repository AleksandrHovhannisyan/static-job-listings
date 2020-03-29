const jobListings = document.getElementById("job-listings");

function getDataFromAPI() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          company: "Photosnap",
          logo: "./assets/img/photosnap.svg",
          new: true,
          featured: true,
          position: "Senior Frontend Developer",
          role: "Frontend",
          level: "Senior",
          postedAt: "1d ago",
          contract: "Full Time",
          location: "USA Only",
          languages: ["HTML", "CSS", "JavaScript"]
        },
        {
          id: 2,
          company: "Manage",
          logo: "./assets/img/manage.svg",
          new: true,
          featured: true,
          position: "Fullstack Developer",
          role: "Fullstack",
          level: "Midweight",
          postedAt: "1d ago",
          contract: "Part Time",
          location: "Remote",
          languages: ["Python"],
          tools: ["React"]
        },
        {
          id: 3,
          company: "Account",
          logo: "./assets/img/account.svg",
          new: true,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "2d ago",
          contract: "Part Time",
          location: "USA Only",
          languages: ["JavaScript"],
          tools: ["React", "Sass"]
        },
        {
          id: 4,
          company: "MyHome",
          logo: "./assets/img/myhome.svg",
          new: false,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "5d ago",
          contract: "Contract",
          location: "USA Only",
          languages: ["CSS", "JavaScript"]
        },
        {
          id: 5,
          company: "Loop Studios",
          logo: "./assets/img/loop-studios.svg",
          new: false,
          featured: false,
          position: "Software Engineer",
          role: "FullStack",
          level: "Midweight",
          postedAt: "1w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["JavaScript"],
          tools: ["Ruby", "Sass"]
        },
        {
          id: 6,
          company: "FaceIt",
          logo: "./assets/img/faceit.svg",
          new: false,
          featured: false,
          position: "Junior Backend Developer",
          role: "Backend",
          level: "Junior",
          postedAt: "2w ago",
          contract: "Full Time",
          location: "UK Only",
          tools: ["RoR"]
        },
        {
          id: 7,
          company: "Shortly",
          logo: "./assets/img/shortly.svg",
          new: false,
          featured: false,
          position: "Junior Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "2w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["HTML", "JavaScript"],
          tools: ["Sass"]
        },
        {
          id: 8,
          company: "Insure",
          logo: "./assets/img/insure.svg",
          new: false,
          featured: false,
          position: "Junior Frontend Developer",
          role: "Frontend",
          level: "Junior",
          postedAt: "2w ago",
          contract: "Full Time",
          location: "USA Only",
          languages: ["JavaScript"],
          tools: ["Vue, Sass"]
        },
        {
          id: 9,
          company: "Eyecam Co.",
          logo: "./assets/img/eyecam-co.svg",
          new: false,
          featured: false,
          position: "Full Stack Engineer",
          role: "Fullstack",
          level: "Midweight",
          postedAt: "3w ago",
          contract: "Full Time",
          location: "Worldwide",
          languages: ["JavaScript", "Python"],
          tools: ["Django"]
        },
        {
          id: 10,
          company: "The Air Filter Company",
          logo: "./assets/img/the-air-filter-company.svg",
          new: false,
          featured: false,
          position: "Front-end Dev",
          role: "Frontend",
          level: "Junior",
          postedAt: "1mo ago",
          contract: "Part Time",
          location: "Worldwide",
          languages: ["JavaScript"],
          tools: ["React", "Sass"]
        }
      ]);
    }, 1000);
  });
}

function renderJobListings(listings) {
  jobListings.innerHTML = listings
    .map(
      listing => `<div class="job-listing card${
        listing.featured ? " featured" : ""
      }">
      <header class="listing-header">
        <img src="${listing.logo}" alt="${
        listing.company
      }'s logo" class="company-logo" />
        <div>
          <div class="listing-details">
            <span class="company-name">${listing.company}</span>
            <ul class="listing-types">
                ${
                  listing.new
                    ? `<li class="new listing-type pill">NEW!</li>`
                    : ""
                }
                ${
                  listing.featured
                    ? `<li class="featured listing-type pill">FEATURED</li>`
                    : ""
                }
            </ul>
          </div>
          <div class="position">
            <div class="title">${listing.position}</div>
            <div class="details">
              <div class="detail posted-at">${listing.postedAt}</div>
              <div class="detail contract">${listing.contract}</div>
              <div class="detail location">${listing.location}</div>
            </div>
          </div>
        </div>
      </header>
      <hr>
      <footer class="tags">
      <a class="tag" href="#0">${listing.role}</a>
      <a class="tag" href="#0">${listing.level}</a>
      ${
        listing.languages
          ? listing.languages
              .map(lang => `<a class="tag" href="#0">${lang}</a>`)
              .join("")
          : ""
      }  
      ${
        listing.tools
          ? listing.tools
              .map(tool => `<a class="tag" href="#0">${tool}</a>`)
              .join("")
          : ""
      }
      </footer>
    </div>`
    )
    .join("");
}

getDataFromAPI().then(renderJobListings);
