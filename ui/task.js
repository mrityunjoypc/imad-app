
var nameInp = document.getElementById('inp');
var name = nameInp.value;
var submit = document.getElementById('submit-btn');
submit.onclick = function(){



var names = ['name1','name2','name3','name2',];
var list = '';
for(var i =0; i<names.length;i++){
	list+= '<li>'+ names[i] + '</li>';
}
var ul = document.getElementById('namelist')
ul.innerHTML = list;
};

