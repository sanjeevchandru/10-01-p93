document.write("57. to create one string of specified copies (positive numbers) of a given string.."+"<br>");
function test57(str,n){
    if(n<0){
        return false;
    }
    return str.repeat(n);
}
document.write("The string :sanjeev , Ans :"+test57("sanjeev",5)+"<br><br>");