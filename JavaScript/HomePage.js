var LeftHomePage = [
  {
    "leftImg":"../img/TevdaFlower.png",
    "title1":"បុណ្យចូលឆ្នាំថ្មី",
    "title2":"ប្រពៃណីជាតិ",
    "button":"អានបន្ត"
  }
]
var itemHome = [
  {
    "link":"../HTML/StarKNY.html",
    "itemImg":"../img/in_house.jpg",
    "itemTitle":"ព្រះរាជពិធី ត្រស្តិសង្ក្រាន្ត",
    "itemButton":"អានបន្ត"
  },
  {
    "link":"../HTML/StarKNY.html",
    "itemImg":"../img/star_back.jpg",
    "itemTitle":" ប្រវត្តិ គោមផ្កាយ",
    "itemButton":"អានបន្ត"
  },
  {
    "link":"../HTML/StarKNY.html",
    "itemImg":"../img//Trot.jpg",
    "itemTitle":"ការសម្ដែងរបាំត្រុដិ",
    "itemButton":"អានបន្ត"
  },
]
var itemSecond = [
  {
    "title-itemSecond":"ចូលឆ្នាំខ្មែរ",
    "description-itemSecond":"ចូលឆ្នាំខ្មែរ គឺជាពិធីបុណ្យ​ចូលឆ្នាំថ្មីរបស់កម្ពុជា ដែលកំណត់តាម ប្រតិទិនពុទ្ធសាសនា តាមដំណើរគោលចររបស់ ព្រះចន្ទដែលរាប់តាមរង្វាស់នៃឆ្នាំ ចន្ទគតិ នៅក្នុងវប្បធម៌របស់កម្ពុជា ពិធីបុណ្យនេះត្រូវបានគេហៅថា ពិធីបុណ្យ គិម្ហៈរដូវ'បុណ្យរដូវក្ដៅ' នៃវិស្សមកាលតូច ដែលបានមកពីអរិយធម៌ នៃវប្បធម៌ ប្រទេសឥណ្ឌា ដែលហៅថ្ងៃចូលឆ្នាំថ្មីថា'សង្ក្រាន្ត' ដែលពាក្យ សង្ក្រាន្ត ជាភាសាដើម នៃពាក្យ (សំស្ក្រឹត) ដែលត្រូវបានប្រជាជនកម្ពុជា ឱ្យនិយមន័យថា (សង្ក្រាន្ត​ខ្មែរ) គឺជាថ្ងៃចូលឆ្នាំថ្មី ដែលប្រារព្ធ​ឡើងរៀងរាល់ ថ្ងៃទី១៣ ឬ ថ្ងៃទី១៤ ខែមេសា ជារៀងរាល់ឆ្នាំ ប្រជាពលរដ្ឋ​កម្ពុជា​គ្រប់រូប និងត្រូវបានឈប់សំរាកពីការងារដើម្បីចូលរួមអបអរថ្ងៃចូលឆ្នាំថ្មីរបស់ពួកគេ ដែលមានរយៈពេលពេញមួយសប្ដាហ៍ ។​"
  }
]
var khmerGame = [
  "ល្បែងស្ដេចចង់ ឬអៀវ","ល្បែងទាញព្រ័ត្រ","ល្បែងកូនគោល","ល្បែងចត្រង្គ ឬអុក","ល្បែងស្វាដណ្ដើមស្លឹកឈើ","ល្បែងបាយខុំ","ល្បែងប្រជល់មាន់","ល្បែងប៉ក់ចាប","ល្បែងរាវបង្កង","ល្បែងចោលឈូង","ល្បែងចាប់កូនខ្លែង","ល្បែងគ្របមាន់","ល្បែងបោះអង្គញ់","ល្បែងលោតអន្ទាក់","ល្បែងលាក់កូនកាស","ល្បែងគោះត្រឡោក","ល្បែងទាត់សី","ល្បែងបិទពួន","ល្បែងចោះប្រមាត","ល្បែងលាក់ធ្យូង","ល្បែងលាក់កន្សែង","ល្បែងឳបត្រឡាច"
]
leftHome()
function leftHome(){
  var txtLeftHome=""
  LeftHomePage.forEach((e)=> {
    txtLeftHome += `
      <div class="left-home">
        <img src="${e["leftImg"]}" alt="">
        <div class="left-title">
          <h1>${e["title1"]}</h1>
          <h2>${e["title2"]}</h2>
          <button>${e["button"]}</button>
        </div>
      </div>
    `
  })
  document.querySelector(".FirstHome-left").innerHTML = txtLeftHome
}

itemLeftHome()
function itemLeftHome() {
  var txtItemHome = ""
  itemHome.forEach((e)=> {
    txtItemHome += `
      <li>
        <img src="${e["itemImg"]}" alt="">
        <h2>${e["itemTitle"]}</h2>
        <a href="${e["link"]}"><button>${e["itemButton"]}</button></a>
        
      </li>
    `
  })
  document.querySelector(".BodyHomeItem").innerHTML = txtItemHome
}

itemSecondHome()
function itemSecondHome() {
  var txtItemSecond = ""
  itemSecond.forEach((e)=>{
    txtItemSecond += `
      <h2>${e["title-itemSecond"]}</h2>
      <p>${e["description-itemSecond"]}</p>
    `
  })
  document.querySelector(".BodySecondItem-left").innerHTML = txtItemSecond
}

itemGame()
function itemGame(){
  var txtGame = ""
  khmerGame.forEach((e)=>{
    txtGame += `
    <li><p>${e}</p></li>
    `
  })
  document.querySelector(".KhmerGame").innerHTML = txtGame
}