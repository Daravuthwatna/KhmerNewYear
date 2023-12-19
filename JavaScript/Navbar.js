function Click() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
     x.classList.add("navbar")
     x.classList.remove("topnav")
  } else {
     x.classList.add("topnav")
     x.classList.remove("navbar")
  }
 }
var navbarItem = [
  {
    "navbar":"ទំព័រដើម", 
    "sub-navabr":[], 
    "link":"../HTML/HomePage.html"
  },
  {
    "navbar":"បុណ្យចូលឆ្នាំ",
    "sub-navabr":[
    {
      "name-navbar":"ថ្ងៃសង្រ្តាន",
      "sub-name-navbar":[
        {
          "link-sub-name-nav":"../HTML/KNYDay1.html",  
          "top-sub-navbar":"ថ្ងៃទី​ ១: មហាសង្ក្រាន្ត"
        },
        {
          "link-sub-name-nav":"../HTML/KNYDay2.html",  
          "top-sub-navbar":"ថ្ងៃទី​ ២: វារៈវ័នបត"
        },
        {
          "link-sub-name-nav":"../HTML/KNYDay3.html",  
          "top-sub-navbar":"ថ្ងៃទី​ ៣: វារៈឡើងស័ក"
        },
      ]
    },
    {
      "name-navbar":"ទំនៀមទម្លាប់",
      "sub-name-navbar":[
        {
          "link-sub-name-nav":"../HTML/KNYBefore.html",  
          "top-sub-navbar":"មុនពេលេចូលឆ្នាំ"
        },
        {
          "link-sub-name-nav":"../HTML/KNYCenter.html",  
          "top-sub-navbar":"កំឡុងពេលចូលឆ្នាំ"
        },
        {
          "link-sub-name-nav":"../HTML/KNYAfter.html",  
          "top-sub-navbar":"ក្រោយពេលចូលឆ្នាំ"
        },
      ]
    },
    {
      "name-navbar":"ប្រវត្តិ",
      "sub-name-navbar":[
      {
        "link-sub-name-nav":"../HTML/DetalesKNY.html",  
        "top-sub-navbar":"ទេវតាទាំង​ ៧"
      },
      {
        "link-sub-name-nav":"",
        "top-sub-navbar":"ប្រវត្តិនៃរបាំត្រុដិ"
      },
      {
        "link-sub-name-nav":"../HTML/HistoryKNY.html",
        "top-sub-navbar":"ប្រវត្តិនៃបុណ្យចូលឆ្នាំខ្មែរ"
      },
      {
        "link-sub-name-nav":"../HTML/StarKNY.html",
        "top-sub-navbar":"ប្រវត្តិ គោមផ្កាយ"
      },
      {
        "link-sub-name-nav":"../HTML/TorSorkran.html",
        "top-sub-navbar":"ព្រះរាជពិធី ត្រស្តិសង្ក្រាន្ត"
      },
      ]
    },
  ],"link":""},
  {
    "navbar":"ឯកសារយោង",
    "sub-navabr":[],
    "link":""
  },
  {
    "navbar":"អំពីក្រុម",
    "sub-navabr":[],
    "link":""
  },
 ]
 getNavbar()
 function getNavbar(){
  var txtNavbar = ''
  navbarItem.forEach((e)=>{
    var subNavbar = e["sub-navabr"]
    var txtSubNavbar = ''
    subNavbar.forEach((e1)=>{
      var moreSub = e1["sub-name-navbar"]
      var txtMoreSub = ""
      moreSub.forEach((e2)=>{
        txtMoreSub += `
          <li>
            <a href="${e2["link-sub-name-nav"]}">${e2["top-sub-navbar"]}</a>
          </li>
        `
      })
      txtSubNavbar += `
      <li>
        <a href="#">${e1["name-navbar"]}</a>
        <ul class="moreDropDown">${txtMoreSub}</ul>
      </li>
      `
    })
     txtNavbar += `
       <li>
         <a href="${e["link"]}">${e["navbar"]}</a>
         <ul class="dropDown">${txtSubNavbar}</ul>
       </li>
     `
  })
  console.log(txtNavbar)
  document.querySelector(".navbar").innerHTML = `<ul>${txtNavbar}</ul>`
 }