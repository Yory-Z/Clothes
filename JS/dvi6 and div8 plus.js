function changePages(More_info,Close_info,object,Height)
{
	var Div_More=document.getElementById(More_info);
	var Div_Close=document.getElementById(Close_info);
	var Div_Plus=document.getElementById(object);
	Div_More.onclick=function()
	{
		startMove(Div_Plus, {height: Height});
	}
	Div_Close.onclick=function()
	{
		startMove(Div_Plus, {height: 0});
	}

	var Div_Plus_Content=Div_Plus.getElementsByTagName('div');
	var Div_Plus_Nav=Div_Plus.getElementsByTagName('ol')[0].getElementsByTagName('li');
	for(var i=0;i<Div_Plus_Nav.length;i++)
	{
		Div_Plus_Nav[i].index=i;
		Div_Plus_Nav[i].onclick=function()
		{
			for(var j=0;j<Div_Plus_Content.length;j++)
			{
				Div_Plus_Content[j].style.display='none';
			}
			Div_Plus_Content[this.index].style.display='block';
		}

	}	
}

