var leftMenu = [
  {"menu":"ថ្ងៃសង្រ្តាន","sub-menu":[
    {"menu-link":"../HTML/KNYDay1.html", "name-menu":"ថ្ងៃទី​ ១: មហាសង្ក្រាន្ត"},
    {"menu-link":"../HTML/KNYDay2.html", "name-menu":"ថ្ងៃទី​ ២: វារៈវ័នបត"},
    {"menu-link":"../HTML/KNYDay3.html", "name-menu":"ថ្ងៃទី​ ៣: វារៈឡើងស័ក"},
  ]},
  {"menu":"ទំនៀមទម្លាប់","sub-menu":[
    {"menu-link":"../HTML/KNYBefore.html", "name-menu":"មុនពេលេចូលឆ្នាំ"},
    {"menu-link":"../HTML/KNYCenter.html", "name-menu":"កំឡុងពេលចូលឆ្នាំ"},
    {"menu-link":"../HTML/KNYAfter.html", "name-menu":"ក្រោយពេលចូលឆ្នាំ"},
  ]},
  {"menu":"ប្រវត្តិ និងពិធីផ្សេងៗ","sub-menu":[
    {"menu-link":"../HTML/DetalesKNY.html", "name-menu":"ទេវតាទាំង​ ៧"},
    {"menu-link":"", "name-menu":"ប្រវត្តិនៃរបាំត្រុដិ"},
    {"menu-link":"../HTML/HistoryKNY.html", "name-menu":"ប្រវត្តិនៃបុណ្យចូលឆ្នាំខ្មែរ"},
    {"menu-link":"../HTML/StarKNY.html", "name-menu":" ប្រវត្តិ គោមផ្កាយ"},
    {"menu-link":"", "name-menu":" ប្រវត្តិ ព្រះរាជពិធី ត្រស្តិសង្ក្រាន្ត"},
  ]},
]
GetLeftMenu()
function GetLeftMenu() {
  var txtLeftMenu = ''
  leftMenu.forEach((e)=>{
    var subLeftMenu = e["sub-menu"]
    var txtSubLeftMenu = ''
    subLeftMenu.forEach((e1)=> {
      txtSubLeftMenu += `
        <li>
          <a href="${e1["menu-link"]}" class="list-right-menu">${e1["name-menu"]}</a>
        </li>
      `
    })
    txtLeftMenu += `
      <li>
        <a href="#" class="title-right-menu">${e["menu"]}</a>
        <ul class="sub-right-menu">${txtSubLeftMenu}</ul>
      </li>
    `
  })
  document.querySelector(".rightMenu").innerHTML = `<ul>${txtLeftMenu}</ul>`
}