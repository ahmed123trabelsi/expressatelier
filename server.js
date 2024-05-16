var http =require('http')
var url=require('url')
var querystring=require('querystring')
var server = http.createServer(function(req,res)
{/* res.writeHead(200)
res.end("salut les websites") */
var params=querystring.parse(url.parse(req.url).query)
var page=url.parse(req.url).pathname
console.log(page)
res.writeHead(200,{"Content-Type":"text/plain"})
/* res.write("hello1")
res.end('<p>voici un paragraphe <strong>HTML</strong>!</p>') */
if('id' in params &&'login' in params) {
    res.write('votre id est '+params['id']+' et votre login '+params['login'])
}
else {
    res.write('veuileez saisir votre id et login')
}
if(page=='/') {
    res.write('vous etes dans la page d\'accueil')
}
else if(page=='/contact') {
    res.write('vous etes dans la page contact')
}
else if(page=='/affichage/1/user') {
    res.write('afficher l\'user qui a \'id 1')
}
res.end()
})
server.listen(8084)