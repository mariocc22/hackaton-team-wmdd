### 📜 Table of Contents:
- [👋 About](#about)
- [🌐 Links](#links)
- [🖥️ Preview](#%EF%B8%8Fpreview)
- [😊 Main Features](#main-features)
- [🔨 Tech Stack](#tech-stack)
- [👥 Team Members](#team-members)

---

### 👋 About:

Created for hackathon, we teamed up as a group of **5 developers** to create a site/app on the topic of **"Society / Community"**. We had 9 hours to complete this project, and are honored to have been granted 1st place. 🏆

**WheelScout** is a live accessibility reporting site that helps mobility aid users who want to streamline their journey planning by offering a comprehensive hotspot overview of nearby destinations and presenting the latest community reports in the area, unlike other web mapping platforms which typically offer limited, static information on accessibility.

---

### 🌐 Links:

- **Presentation deck:** [app.box.com/s/1qg0mnh78n0505srz2dipwkp89fy6brg](https://app.box.com/s/1qg0mnh78n0505srz2dipwkp89fy6brg)
- **Hackathon hosted by** [Langara's Computer Science Club](https://www.instagram.com/langaracpsc/)
- **Hackathon details:** [langaracs.tech/hacks](https://langaracs.tech/hacks)

---

### 🖥️ Preview:

![Screen recording demo for WheelScout. Please open the dropdown below for a detailed image description.](https://rhizo.gitlab.io/random/images/9823402738.gif)

<details>
<summary><sub><sup>Open for image description.</sup></sub></summary>
    
> A screen recording (GIF) of the WheelScout demo. There are three tabs at the top. The first tab says "View Map" with a globe emoji. The second tab says "Recent Reportings" with memo emoji. The third tab says "Report a Problem" with a light bulb emoji. The map tab is shown when the site loads, displaying downtown Vancouver with numerous locations marked with circular wheelchair indicators. The user clicks on Amigo Cafe, and a mini modal appears with a photo, name, problem type, and additional information about the report, including when it was posted, and by whom. The user clicks the "x" icon to dismiss the modal, and clicks on the "Recent Reportings" tab. The screen switches to reveal a list of latest reports from the community with corresponding information, as well as thumbs up and thumbs down icons that are labelled with "Did you find this helpful?" alongside. The user clicks on the thumbs up, and a confirmation popup appears. The thumbs up icon then turns green. The user returns to the map tab, and clicks on Science World. After a brief delay, a small modal appears with accessibility information provided by Google Maps, along with a button that says "report issue". Clicking the button takes the user to the "Report a Problem" tab, which is a form that consists of location name, address, problem type as a dropdown, optional problem details, and a date picker. Upon filling in the form and pressing the "Submit Report" button, the user goes back to the map view, and demonstrates that the Science World report has been added with the information they filled in. Finally, the user goes to the "Recent Reportings" tab to show that it's been added to the list too.
</details>

---

### 😊 Main Features:

**🌍 Map View:** – Tab #1
- Set to the user's geolocation, it displays a map of the surrounding area, with an assortment of wheelchair icons indicating spots that have been marked as inaccessible by users.
- Users can click on a wheelchair icon to view the most recent report in that location and its details:
    - photo
    - problem type
    - date posted
    - date resolved / estimated date
    - reporter name
- Users can also click an unreviewed part of the map to view the accessibility facilities stated by the venue owner.

**📝 View Reports:** – Tab #2
- Users can view the latest reports from the community (near their current geolocation) in list format.
- They can upvote or downvote a review to improve the accuracy of reports in the area.

**💡 Submit Reports:** – Tab #3
- Users can submit their own reports by clicking anywhere on the map, then "Report Issue".
- The report form consists of the following:
    - Place name
    - Address (inherited from where the user clicked on the map view)
    - Problem type [construction, out of order, temporarily closed, event, other]
    - Problem details (optional)
    - Date picker (the estimated date that the problem will be resolved)

---

### 🔨 Tech Stack:
- **Front-end:** React, Google Maps API
- **Back-end:** JSON Server, Node
- **Packages / Others:** [Vite](https://github.com/vitejs/vite), [CORS](https://github.com/expressjs/cors), [Material UI](https://github.com/mui/material-ui), [DayPicker](https://github.com/gpbl/react-day-picker), [DropdownList](https://jquense.github.io/react-widgets/docs/DropdownList/), [Tabler Icons](https://github.com/tabler/tabler-icons#react)
- **Team collaboration:** GitHub, Slack, Figma

---

### 👥 Team Members:
- **Tony** – [🔗](https://www.linkedin.com/in/tony-sa/)
- **Mario** – [🔗](https://www.linkedin.com/in/mariocesena/)
- **Rena** – [🔗](https://www.linkedin.com/in/renasakata/)
- **HT** – [🔗](https://www.linkedin.com/in/ht-dev)
- **Mahima** – [🔗](https://www.linkedin.com/in/mahima-mukhi-b70742138/)

![Langara Hackathon 2023 Event Photos. Please read the dropdown below for detailed image descriptions.](https://rhizo.gitlab.io/random/images/873498273.png)

<details>
<summary><sub><sup>Open for image description.</sup></sub></summary>
    
> An assortment of 8 photos arranged in a grid format of varying sizes, with the text "WheelScout" scrawled across the center. From top left to bottom right, first image is of the WheelScout team posing happily for a group photo. Second image is of the team huddled together and holding the first place award plaque on the stage. Third and fifth images are of the team presenting in front of the judges in a conference room. Fourth and seventh images are of the team presenting on the stage in front of the audience. Sixth image is a view of the hackathon venue, with all participants at work. Eighth image is of the team huddled together and holding the first place award plaque in front of the hackathon photo booth, which has "LANGARA HACKS" in all caps shaped by black balloons, with an assortment of circular orange paper decorations as the backdrop.
</details>
