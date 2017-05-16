//banner
var btns = document.querySelectorAll(".btnbox li");
var cons = document.querySelectorAll(".bannerbox li");
var container = document.querySelector(".banner");
var btnlast = document.querySelector(".jiantou-left");
var btnnext = document.querySelector(".jiantou-right");
var btnnow = btns[0];
var connow = cons[0];
var number = 0;
Array.from(btns).forEach(function(element, index) {
	element.onmouseover = function() {
		number = index;
		btnnow.style.background = "rgba(0,0,0,0.5)";
		element.style.background = "rgba(255,255,255,0.5)";
		btnnow = this;

		connow.style.zIndex = 1;
		connow.style.opacity = 0;
		cons[index].style.zIndex = 2;
		cons[index].style.opacity = 1;
		connow = cons[index];
	};
});

function move() {
	number++;
	if(number == btns.length) {
		number = 0;
	}
	if(number == -1) {
		number = btns.length - 1;
	}

	btnnow.style.background = "rgba(0,0,0,0.5)";
	btns[number].style.background = "rgba(255,255,255,0.5)";
	btnnow = btns[number];

	connow.style.zIndex = 1;
	connow.style.opacity = 0;
	cons[number].style.zIndex = 2;
	cons[number].style.opacity = 1;
	connow = cons[number];
}

var t = setInterval(move, 5000);

container.onmouseover = function() {
	clearInterval(t);
}
container.onmouseout = function() {
	t = setInterval(move, 5000);
}
btnlast.onclick = function() {
	number -= 2;
	move();

}
btnnext.onclick = function() {
	move();
}

//明星单品
var inner = document.querySelector(".mxdp-list-inner");
var innerContainer = document.querySelector(".mxdp-list");
var innerLeft = 0;
var btnLeft = document.querySelector(".biaoti-mxdp .btnleft");
var btnRight = document.querySelector(".biaoti-mxdp .btnright");

function move1() {
	if(innerLeft == 0) {
		inner.style.marginLeft = -1223 + "px";
		innerLeft = 1;
	} else {
		inner.style.marginLeft = 0;
		innerLeft = 0;
	}

};
var t1 = setInterval(move1, 5000);
innerContainer.onmouseover = function() {
	clearInterval(t1)
};
innerContainer.onmouseout = function() {
	t1 = setInterval(move1, 5000);
};
btnLeft.onclick = function() {
	if(innerLeft == 1) {
		move1();
	}

};
btnRight.onclick = function() {
	if(innerLeft == 0) {
		move1();
	}

};

//内容
var innerNr = $(".neirong11 .inner");
var lbjt1 = $(".lbjt1");
var lbjt2 = $(".lbjt2");
var lunbodian1 = $(".lbd11");
var lunbodian2 = $(".lbd12");
var lunbodian3 = $(".lbd13");
var lunbodian4 = $(".lbd14");
moveNR(innerNr[0], lbjt1[0], lbjt2[0], lunbodian1);
moveNR(innerNr[1], lbjt1[1], lbjt2[1], lunbodian2);
moveNR(innerNr[2], lbjt1[2], lbjt2[2], lunbodian3);
moveNR(innerNr[3], lbjt1[3], lbjt2[3], lunbodian4);
function moveNR(inner1, lbjt1, lbjt2, lunbodian) {
	let num2 = 0;
	var lbdnow = lunbodian[0];

	function move3() {
		num2++;
		if(num2 == lunbodian.length) {
			num2 = lunbodian.length - 1;
		}
		if(num2 < 0) {
			num2 = 0;
		}
		inner1.style.marginLeft = -296 * num2 + "px";

		lbdnow.style.background = "#b0b0b0";
		lbdnow.style.border = "2px solid white";

		lunbodian[num2].style.background = "#FFFFFF";
		lunbodian[num2].style.border = "2px solid orange";
		lbdnow = lunbodian[num2];

	}
	lbjt1.onclick = function() {
		num2 -= 2;
		move3();

	}
	lbjt2.onclick = function() {
		move3();
	}
	Array.from(lunbodian).forEach(function(v, i) {
		v.onclick = function() {
			inner1.style.marginLeft = -296 * i + "px";
			lbdnow.style.background = "#b0b0b0";
			lbdnow.style.border = "2px solid white";

			lunbodian[i].style.background = "#FFFFFF";
			lunbodian[i].style.border = "2px solid orange";
			lbdnow = lunbodian[i];
			num2 = i;
		};
	});
}


//aside
$("aside>ul>li").hover(function() {
	$(this).find(".banner_menu_content").show();
}, function() {
	$(this).find(".banner_menu_content").hide();
})

//navhead

$(".liebiao1").hover(function() {
	$(".drop").slideDown();
	var index = $(this).index();
	$(".drop1").eq(index).show().siblings().hide();
},function(){});
$(".drop").hover(function() {},function(){
	$(".drop").slideUp();
});



