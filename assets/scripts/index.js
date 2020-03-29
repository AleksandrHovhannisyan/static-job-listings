const jobListings = document.getElementById("job-listings");
const activeFilters = new Set();
const filtersElement = document.querySelector("#filters .active-filters");

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

function renderJobListings(listings, callback) {
  jobListings.innerHTML = listings
    .map(listing => {
      const tags = [listing.role, listing.level];

      if (listing.languages) {
        listing.languages.forEach(lang => tags.push(lang));
      }

      if (listing.tools) {
        listing.tools.forEach(tool => tags.push(tool));
      }

      return `<div class="job-listing card${
        listing.featured ? " featured" : ""
      }" data-tags="${tags.join(" ")}">
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
      ${tags.map(tag => `<a class="tag" href="#0">${tag}</a>`).join("")}
      </footer>
    </div>`;
    })
    .join("");

  callback();
}

function addFilter(filter) {
  if (activeFilters.has(filter)) return;
  activeFilters.add(filter);

  const newFilter = document.createElement("div");
  newFilter.classList.add("filter");
  newFilter.id = `filter-${filter}`;

  const filterName = document.createElement("span");
  filterName.classList.add("filter-name");
  filterName.innerText = filter;

  const clearFilter = document.createElement("div");
  clearFilter.classList.add("clear-filter");
  clearFilter.addEventListener("click", clickEvent => {
    const filterToRemove = clickEvent.target.parentNode;
    filtersElement.removeChild(filterToRemove);
  });

  newFilter.appendChild(filterName);
  newFilter.appendChild(clearFilter);
  filtersElement.appendChild(newFilter);
}

getDataFromAPI().then(data =>
  renderJobListings(data, () => {
    document.querySelectorAll(".tag").forEach(tag => {
      tag.addEventListener("click", clickEvent => {
        addFilter(clickEvent.target.innerText);
      });
    });
  })
);

document.getElementById("clear-filters").addEventListener("click", () => {
  activeFilters.clear();
  filtersElement.innerHTML = "";
});
