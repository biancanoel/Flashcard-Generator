module.exports = ClozeCard;

function ClozeCard (text, cloze) {
    this.fullText = text;
    this.cloze = cloze; 
    this.partial = function () {
        var partialText = this.fullText.replace(this.cloze, "....");
        console.log(partialText);  
    }
}




