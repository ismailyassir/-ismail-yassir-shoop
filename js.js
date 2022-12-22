let product1 = 0,
    product2 = 0,
    product3 = 0,
    product4 = 0,
    product5 = 0,
    product6 = 0,
    product7 = 0,
    product8 = 0;
let totalP1 = 0,
    totalP2 = 0,
    totalP3 = 0,
    totalP4 = 0,
    totalP5 = 0,
    totalP6 = 0,
    totalP7 = 0,
    totalP8 = 0;
let ac1 = document.getElementById("ac1"),
    ac2 = document.getElementById("ac2"),
    ac3 = document.getElementById("ac3"),
    ac4 = document.getElementById("ac4"),
    ac5 = document.getElementById("ac5"),
    ac6 = document.getElementById("ac6"),
    ac7 = document.getElementById("ac7"),
    ac8 = document.getElementById("ac8");
let logique = false;
let max = 0;
// Product 1
let ButtonPlus1 = document.getElementById("plus-p1"),
    ButtonMinus1 = document.getElementById("moin-p-1"),
    Total1 = document.getElementById("totall-p1"),
    Afichage1 = document.getElementById("afiche-p1");
ButtonPlus1.addEventListener("click", () => {
    if (product1 < 20) {
        product1++;
        Afichage1.innerHTML = product1;
        totalP1 += 200;
        Total1.innerHTML = `The total : ${totalP1}dh`;
        if (product1 > 0) {
            ac1.style.backgroundColor = "#15eb32";
        } else {
            ac1.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus1.addEventListener("click", () => {
    if (product1 > 0) {
        product1--;
        Afichage1.innerHTML = product1;
        totalP1 -= 200;
        Total1.innerHTML = `The total : ${totalP1}dh`;
        if (product1 > 0) {
            ac1.style.backgroundColor = "#15eb32";
        } else {
            ac1.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 2
let ButtonPlus2 = document.getElementById("plus-p2"),
    ButtonMinus2 = document.getElementById("moin-p-2"),
    Total2 = document.getElementById("totall-p2"),
    Afichage2 = document.getElementById("afiche-p2");
ButtonPlus2.addEventListener("click", () => {
    if (product2 < 20) {
        product2++;
        Afichage2.innerHTML = product2;
        totalP2 += 220;
        Total2.innerHTML = `The total : ${totalP2}dh`;
        if (product2 > 0) {
            ac2.style.backgroundColor = "#15eb32";
        } else {
            ac2.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus2.addEventListener("click", () => {
    if (product2 > 0) {
        product2--;
        Afichage2.innerHTML = product2;
        totalP2 -= 220;
        Total2.innerHTML = `The total : ${totalP2}dh`;
        if (product2 > 0) {
            ac2.style.backgroundColor = "#15eb32";
        } else {
            ac2.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 3
let ButtonPlus3 = document.getElementById("plus-p3"),
    ButtonMinus3 = document.getElementById("moin-p-3"),
    Total3 = document.getElementById("totall-p3"),
    Afichage3 = document.getElementById("afiche-p3");
ButtonPlus3.addEventListener("click", () => {
    if (product3 < 20) {
        product3++;
        Afichage3.innerHTML = product3;
        totalP3 += 300;
        Total3.innerHTML = `The total : ${totalP3}dh`;
        if (product3 > 0) {
            ac3.style.backgroundColor = "#15eb32";
        } else {
            ac3.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus3.addEventListener("click", () => {
    if (product3 > 0) {
        product3--;
        Afichage3.innerHTML = product3;
        totalP3 -= 300;
        Total3.innerHTML = `The total : ${totalP3}dh`;
        if (product3 > 0) {
            ac3.style.backgroundColor = "#15eb32";
        } else {
            ac3.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 4
let ButtonPlus4 = document.getElementById("plus-p4"),
    ButtonMinus4 = document.getElementById("moin-p-4"),
    Total4 = document.getElementById("totall-p4"),
    Afichage4 = document.getElementById("afiche-p4");
ButtonPlus4.addEventListener("click", () => {
    if (product4 < 20) {
        product4++;
        Afichage4.innerHTML = product4;
        totalP4 += 150;
        Total4.innerHTML = `The total : ${totalP4}dh`;
        if (product4 > 0) {
            ac4.style.backgroundColor = "#15eb32";
        } else {
            ac4.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus4.addEventListener("click", () => {
    if (product4 > 0) {
        product4--;
        Afichage4.innerHTML = product4;
        totalP4 -= 150;
        Total4.innerHTML = `The total : ${totalP4}dh`;
        if (product4 > 0) {
            ac4.style.backgroundColor = "#15eb32";
        } else {
            ac4.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 5
let ButtonPlus5 = document.getElementById("plus-p5"),
    ButtonMinus5 = document.getElementById("moin-p-5"),
    Total5 = document.getElementById("totall-p5"),
    Afichage5 = document.getElementById("afiche-p5");
ButtonPlus5.addEventListener("click", () => {
    if (product5 < 20) {
        product5++;
        Afichage5.innerHTML = product5;
        totalP5 += 190;
        Total5.innerHTML = `The total : ${totalP5}dh`;
        if (product5 > 0) {
            ac5.style.backgroundColor = "#15eb32";
        } else {
            ac5.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus5.addEventListener("click", () => {
    if (product5 > 0) {
        product5--;
        Afichage5.innerHTML = product5;
        totalP5 -= 190;
        Total5.innerHTML = `The total : ${totalP5}dh`;
        if (product5 > 0) {
            ac5.style.backgroundColor = "#15eb32";
        } else {
            ac5.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 6
let ButtonPlus6 = document.getElementById("plus-p6"),
    ButtonMinus6 = document.getElementById("moin-p-6"),
    Total6 = document.getElementById("totall-p6"),
    Afichage6 = document.getElementById("afiche-p6");
ButtonPlus6.addEventListener("click", () => {
    if (product6 < 20) {
        product6++;
        Afichage6.innerHTML = product6;
        totalP6 += 140;
        Total6.innerHTML = `The total : ${totalP6}dh`;
        if (product6 > 0) {
            ac6.style.backgroundColor = "#15eb32";
        } else {
            ac6.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus6.addEventListener("click", () => {
    if (product6 > 0) {
        product6--;
        Afichage6.innerHTML = product6;
        totalP6 -= 140;
        Total6.innerHTML = `The total : ${totalP6}dh`;
        if (product6 > 0) {
            ac6.style.backgroundColor = "#15eb32";
        } else {
            ac6.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 7
let ButtonPlus7 = document.getElementById("plus-p7"),
    ButtonMinus7 = document.getElementById("moin-p-7"),
    Total7 = document.getElementById("totall-p7"),
    Afichage7 = document.getElementById("afiche-p7");
ButtonPlus7.addEventListener("click", () => {
    if (product7 < 20) {
        product7++;
        Afichage7.innerHTML = product7;
        totalP7 += 210;
        Total7.innerHTML = `The total : ${totalP7}dh`;
        if (product7 > 0) {
            ac7.style.backgroundColor = "#15eb32";
        } else {
            ac7.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus7.addEventListener("click", () => {
    if (product7 > 0) {
        product7--;
        Afichage7.innerHTML = product7;
        totalP7 -= 210;
        Total7.innerHTML = `The total : ${totalP7}dh`;
        if (product7 > 0) {
            ac7.style.backgroundColor = "#15eb32";
        } else {
            ac7.style.backgroundColor = "#ff0000";
        }
    }
})
// Product 8
let ButtonPlus8 = document.getElementById("plus-p8"),
    ButtonMinus8 = document.getElementById("moin-p-8"),
    Total8 = document.getElementById("totall-p8"),
    Afichage8 = document.getElementById("afiche-p8");
ButtonPlus8.addEventListener("click", () => {
    if (product8 < 20) {
        product8++;
        Afichage8.innerHTML = product8;
        totalP8 += 240;
        Total8.innerHTML = `The total : ${totalP8}dh`;
        if (product8 > 0) {
            ac8.style.backgroundColor = "#15eb32";
        } else {
            ac8.style.backgroundColor = "#ff0000";
        }
    }
})
ButtonMinus8.addEventListener("click", () => {
    if (product8 > 0) {
        product8--;
        Afichage8.innerHTML = product8;
        totalP8 -= 240;
        Total8.innerHTML = `The total : ${totalP8}dh`;
        if (product8 > 0) {
            ac8.style.backgroundColor = "#15eb32";
        } else {
            ac8.style.backgroundColor = "#ff0000";
        }
    }
})
// cart total
document.getElementById('ishpo').addEventListener('click', () => {
    if (logique == false) {
        logique = true;
        document.getElementById("section2").style.display = "flex";
        document.getElementById("section1").style.display = "none";
        document.getElementById("foter").style.display = "none";
        document.getElementById("prixtotal").innerHTML = max;
    }
})
document.getElementById("section2").style.display = "none";
document.getElementById("backp").addEventListener("click", () => {
    if (logique == true) {
        logique = false;
        document.getElementById("section2").style.display = "none";
        document.getElementById("section1").style.display = "flex";
        document.getElementById("foter").style.display = "flex";
    }
})
document.getElementById("byfinal").addEventListener("click", () => {
    document.getElementById("final").innerHTML = 'Thank you for your purchase';
    document.getElementById("final").style.color = "green";
    setTimeout(() => {
        window.location.reload();
    }, 4000);
})
ac1.addEventListener("click", () => {
    if (totalP1 > 0) {
        max += totalP1
        ac1.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac1.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac2.addEventListener("click", () => {
    if (totalP2 > 0) {
        max += totalP2
        ac2.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac2.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac3.addEventListener("click", () => {
    if (totalP3 > 0) {
        max += totalP3
        ac3.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac3.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac4.addEventListener("click", () => {
    if (totalP4 > 0) {
        max += totalP4
        ac4.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac4.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac5.addEventListener("click", () => {
    if (totalP5 > 0) {
        max += totalP5
        ac5.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac5.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac6.addEventListener("click", () => {
    if (totalP6 > 0) {
        max += totalP6
        ac6.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac6.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac7.addEventListener("click", () => {
    if (totalP7 > 0) {
        max += totalP7
        ac7.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac7.style.backgroundColor = "#15eb32";
        }, 100);
    }
})
ac8.addEventListener("click", () => {
    if (totalP8 > 0) {
        max += totalP8
        ac8.style.backgroundColor = "#2666CF";
        setTimeout(() => {
            ac8.style.backgroundColor = "#15eb32";
        }, 100);
    }
})