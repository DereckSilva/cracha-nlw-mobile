const socialMedia = {
  github: 'DereckSilva',
  instagram: 'dereckkvs',
  twitter: 'spfckkjj',
  facebook: 'dereck.vinicius.75',
  youtube: 'UCwy-B1xW__jih3LKN9MRS1w'
}

function creatSocialMediaLinks() {
  /*document.getElementById('userName').textContent = 'Lionel Messi'*/

  /*userName.textContent = 'Lionel Messi'*/

  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${socialMedia[social]}`
  }
}

creatSocialMediaLinks()

function getInfosGitHubUser() {
  const url = `https://api.github.com/users/${socialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.innerText = data.name
      //userName.textContent = data.name

      pageBio.textContent = data.bio
      nameUser.href = data.html_url
      imageProfile.src = data.avatar_url
      userLogin.innerText = data.login
    })
}

getInfosGitHubUser()
