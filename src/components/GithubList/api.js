export default function search (name) {
    return fetch(name)
       .then(response => response.json())
       .then(json => {
         let valores = []
         for(let i=0; i < json.length;i++){
          valores.push({'name':json[i]['name'],'key':i + 1})
         }
         return valores
        }
         )
  }