function changePage(FirstPage, LastPage, NextPage, EndPage, MorePage, ClosePage, object, Ul, height)
{
	var oDiv_Plus=document.getElementById(object);
	var Div_Close=document.getElementById(ClosePage);
	var Div_More=document.getElementById(MorePage);

	Div_More.onclick=function()
	{
		startMove(oDiv_Plus,{height: height});
	}
	Div_Close.onclick=function()
	{
		startMove(oDiv_Plus,{height: 0});
	}

	var Div_First=document.getElementById(FirstPage);			
	var Div_Last=document.getElementById(LastPage);
	var Div_Next=document.getElementById(NextPage);
	var Div_End=document.getElementById(EndPage);
	var Div_Plus_ul=oDiv_Plus.getElementsByTagName(Ul);
	var present=0;
	var last=Div_Plus_ul[present];
	var now=Div_Plus_ul[present];
	var next=Div_Plus_ul[present+1];
	Div_Last.onclick=function()
	{
		now.style.display='none';
		last.style.display='block';				
		next.style.display='none';				
		present-=1
		if(present>0)
		{
			last=Div_Plus_ul[present-1];
			now=Div_Plus_ul[present];
			next=Div_Plus_ul[present+1];					
		}
		else
		{
			present=0;
			last=Div_Plus_ul[present];
			now=Div_Plus_ul[present];
			next=Div_Plus_ul[present+1];					
		}						
	}
	Div_Next.onclick=function()
	{
		last.style.display='none';
		now.style.display='none';
		next.style.display='block';	
		present+=1;
		if(present<Div_Plus_ul.length-1)
		{
			last=Div_Plus_ul[present-1];
			now=Div_Plus_ul[present];
			next=Div_Plus_ul[present+1];
		}
		else
		{
			present=Div_Plus_ul.length-1;
			last=Div_Plus_ul[present-1];
			now=Div_Plus_ul[present];
			next=Div_Plus_ul[present];				
		}				
	}
	Div_First.onclick=function()
	{
		present=0;
		last=Div_Plus_ul[present];
		now=Div_Plus_ul[present];
		next=Div_Plus_ul[present+1];
		for(var i=Div_Plus_ul.length-1;i>0;i--)
		{
			Div_Plus_ul[i].style.display='none';
		}
		Div_Plus_ul[i].style.display='block';
	}
	Div_End.onclick=function()
	{
		present=Div_Plus_ul.length-1;
		last=Div_Plus_ul[present-1];
		now=Div_Plus_ul[present];
		next=Div_Plus_ul[present];	
		for(var i=0;i<Div_Plus_ul.length-1;i++)
		{
			Div_Plus_ul[i].style.display='none';
		}
		Div_Plus_ul[i].style.display='block';
	}
}