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
      for(int i=0;i<s.length;i++)
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

//const s = prompt("Enter String:");
alert(firstWord(s));
