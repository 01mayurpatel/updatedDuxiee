var copyTag =document.querySelector('.copy-tag');
var checkTag=document.querySelector('.check-tag');

var str = `@method()
def generate(self, prompt: str):
for output in pipeline(
self.model,
self.tokenizer,
{"prompt": prompt}
):
yield output`;
function func () {
    navigator.clipboard.writeText(str).then(function () {
        checkTag.style.visibility = 'visible';
        copyTag.style.visibility = 'hidden';
    }).catch(function (err) {
        // Handle clipboard write error
        console.error('Clipboard write failed: ', err);
    });
}
// Define togRight in the global scope
