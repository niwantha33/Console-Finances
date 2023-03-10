/*
@task:      Console Finances - analyzing the financial records 
@author:    Niwantha
@Date:      07/01/23

*/

var finances = [
    ['Jan-2010', 867884],
    ['Feb-2010', 984655],
    ['Mar-2010', 322013],
    ['Apr-2010', -69417],
    ['May-2010', 310503],
    ['Jun-2010', 522857],
    ['Jul-2010', 1033096],
    ['Aug-2010', 604885],
    ['Sep-2010', -216386],
    ['Oct-2010', 477532],
    ['Nov-2010', 893810],
    ['Dec-2010', -80353],
    ['Jan-2011', 779806],
    ['Feb-2011', -335203],
    ['Mar-2011', 697845],
    ['Apr-2011', 793163],
    ['May-2011', 485070],
    ['Jun-2011', 584122],
    ['Jul-2011', 62729],
    ['Aug-2011', 668179],
    ['Sep-2011', 899906],
    ['Oct-2011', 834719],
    ['Nov-2011', 132003],
    ['Dec-2011', 309978],
    ['Jan-2012', -755566],
    ['Feb-2012', 1170593],
    ['Mar-2012', 252788],
    ['Apr-2012', 1151518],
    ['May-2012', 817256],
    ['Jun-2012', 570757],
    ['Jul-2012', 506702],
    ['Aug-2012', -1022534],
    ['Sep-2012', 475062],
    ['Oct-2012', 779976],
    ['Nov-2012', 144175],
    ['Dec-2012', 542494],
    ['Jan-2013', 359333],
    ['Feb-2013', 321469],
    ['Mar-2013', 67780],
    ['Apr-2013', 471435],
    ['May-2013', 565603],
    ['Jun-2013', 872480],
    ['Jul-2013', 789480],
    ['Aug-2013', 999942],
    ['Sep-2013', -1196225],
    ['Oct-2013', 268997],
    ['Nov-2013', -687986],
    ['Dec-2013', 1150461],
    ['Jan-2014', 682458],
    ['Feb-2014', 617856],
    ['Mar-2014', 824098],
    ['Apr-2014', 581943],
    ['May-2014', 132864],
    ['Jun-2014', 448062],
    ['Jul-2014', 689161],
    ['Aug-2014', 800701],
    ['Sep-2014', 1166643],
    ['Oct-2014', 947333],
    ['Nov-2014', 578668],
    ['Dec-2014', 988505],
    ['Jan-2015', 1139715],
    ['Feb-2015', 1029471],
    ['Mar-2015', 687533],
    ['Apr-2015', -524626],
    ['May-2015', 158620],
    ['Jun-2015', 87795],
    ['Jul-2015', 423389],
    ['Aug-2015', 840723],
    ['Sep-2015', 568529],
    ['Oct-2015', 332067],
    ['Nov-2015', 989499],
    ['Dec-2015', 778237],
    ['Jan-2016', 650000],
    ['Feb-2016', -1100387],
    ['Mar-2016', -174946],
    ['Apr-2016', 757143],
    ['May-2016', 445709],
    ['Jun-2016', 712961],
    ['Jul-2016', -1163797],
    ['Aug-2016', 569899],
    ['Sep-2016', 768450],
    ['Oct-2016', 102685],
    ['Nov-2016', 795914],
    ['Dec-2016', 60988],
    ['Jan-2017', 138230],
    ['Feb-2017', 671099]
];

/*
@brief   :   Find the total months from "finances" data sets
@param   :   Array 
@return :   return total months 
*/
const find_total_months = function (finances) {

    let prev_month = ''; // need to compare current month in order to check repeat month   
    let no_of_month = 0;

    for (let i = 0; i < finances.length; i++) {

        let month = finances[i][0];// reading the month        

        if (prev_month !== month) {

            no_of_month++;

            prev_month = month; // update previous month to current month 
        }

    }
    return no_of_month;
}

/*
@brief   :   Find the Profit/Losses over the entire period from "finances" data sets
@param   :   Array 
@return :   return profit/losses
*/
const find_profit_losses = function (finances) {

    let pl = 0; // profit/losses init 

    for (let i = 0; i < finances.length; i++) {
        // check validity 
        if (Number(finances[i][1])) {
            pl += Number(finances[i][1]);
        }
    }
    return pl;
}


/*
@brief   :   Find average of the changes in Profit/Losses over the entire period 
            from "finances" data sets
@param   :   Array 
@return :   return Average Change ((Total/Number of months))
@note:      You will need to track what the total change in profits are from 
            month to month and then find the average.

*/
const find_avg_of_change_profit_losses = function (finances) {
    let difference = 0;
    let i = 0;
    // number of elements - 1
    for (; i < (finances.length - 1); i++) {

        difference += (finances[i + 1][1] - finances[i][1]);
    }
    return difference / i;
}

/*
@brief   :   Find greatest increase in profits (date and amount) over the entire period 
            from "finances" data sets
@param   :   Array 
@return :   return array [month,p/l]
*/

const find_greatest_profit_period = function (finances) {

    let g_profit = -Infinity;
    let idx = 0;

    for (let i = 0; i < finances.length; i++) {

        if (Number(finances[i][1]) && Number(finances[i][1]) > 0) {
            if (Number(finances[i][1]) > g_profit) {
                g_profit = Number(finances[i][1]);
                // console.log(g_profit);
                idx = i;
            }
        }
    }

    return finances[idx];
}

/*
@brief   :   Find greatest decrease in losses (date and amount) over the entire period 
            from "finances" data sets
@param   :   Array 
@return :   return array [month,p/l]
*/

const find_greatest_decrease_period = function (finances) {

    let l_profit = Infinity;
    let idx = 0; // get the index of the array 

    for (let i = 0; i < finances.length; i++) {

        if (Number(finances[i][1]) && Number(finances[i][1]) < 0) {
            if (Number(finances[i][1]) < l_profit) {
                l_profit = Number(finances[i][1]);
                // console.log(g_profit);
                idx = i;
            }
        }
    }

    return finances[idx];
}

console.log("Financial Analysis\n----------------------------")

let t_month = "Total Month: ".concat(find_total_months(finances));
// adding to html page 
document.getElementById("total-month").innerHTML =  t_month;
console.log(t_month);

let t_pl = "Total: $".concat(find_profit_losses(finances));
// adding to html page 
document.getElementById("total").innerHTML =  t_pl;
console.log(t_pl);

let avg_change = "Average  Change: $".concat(find_avg_of_change_profit_losses(finances).toFixed(2));
// adding to html page 
document.getElementById("average-change").innerHTML =  avg_change;
console.log(avg_change);

let increase = "Greatest Increase in Profits: ".concat(find_greatest_profit_period(finances)[0]).concat("  $").concat(find_greatest_profit_period(finances)[1]);
// adding to html page 
document.getElementById("increase-profit").innerHTML =  increase;
console.log(increase);

let decrease = "Greatest Decrease in Profits: ".concat(find_greatest_decrease_period(finances)[0]).concat("  $").concat(find_greatest_decrease_period(finances)[1]);
document.getElementById("decrease-profit").innerHTML =  decrease;
console.log(decrease);


