https://course.acciojob.com/open-web-editor?question=6ba833b9-2c59-4a41-822a-4efbe7843090


function firstWord(s) {	
	if(s.length==0)
	{
		return s;
	}
	else if(s.includes(" ",0)==false)
	{
		return s;
	}
	else
	{
      let str;
	  s=s.trim();
      for(let i=0;i<s.length;i++)
		{
			let ch=s.charAt(i);
			
			if(ch==' ')
			{
				return str;
			}
			str+=ch;
		}
    }
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
