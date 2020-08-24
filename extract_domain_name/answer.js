// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example: domainName("http://github.com/") == "github" 

//personal challenge - use regex to match substring
function domainName(url){
    return /^(?:https?:\/\/)?(?:[^@\/\n]+@)?(?:www\.)?([^:\.\n]+)/.exec(url)[1]
}

console.log(domainName("http://google.com")); 
console.log(domainName("504kbo1825ssn9rim9u92a4r0jugy.fr/default.html")); 
console.log(domainName("www.xakep.ru")); 
console.log(domainName("http://www.7u-p599awv3sbvoospn315hgac.name/error")); 

//best practice
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
// };