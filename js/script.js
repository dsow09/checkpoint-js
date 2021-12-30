function minMax(arr) 
{
    if(Array.isArray(arr))
    {
        let min = max = arr[0];

        for(let i = 1; i < arr.length; i++)
        {
            if(min > arr[i]) 
            { 
                min = arr[i];
            }
        }

        for(let i = 1; i < arr.length; i++)
        {
            if(max < arr[i]) 
            {
                max = arr[i];
            }
        }

        return [min, max];
    }
    else
    {
        return 'Vous devez fournir un tableau comme argument';
    }
}
function isSameNum(num1, num2) {
    isSame = false;
    if(num1 === num2) { 
        isSame = true;
    }

    return isSame;
}


function filterArray(arr) 
{
    let arrayFilter = [];

    for(let i = 0; i < arr.length; i++)
    {
        if(Number.isInteger(arr[i]))
        {
            arrayFilter.push(arr[i]);
        }
    }
    return arrayFilter;
}


function getAbsSum(arr) 
{
    let sum = 0;

    for(let i = 0; i < arr.length; i++)
    {
        sum += Math.abs(arr[i]);
    }

   return sum;
}

function countTrue(arr) {
	let count = 0;

    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] === true)
        {
            count++;
        }
    }

    return count;
}

function objectToArray(obj) 
{
    return Object.entries(obj);
}



function getBudgets(arr) 
{
    let budget = 0; let tab = [];

    for(let value of arr)
    {
        tab = Object.values(value)
        budget += tab[2];
    }

    return budget;
}

function afterNYears(names, n) 
{
    n = Math.abs(n); let tab = names;

    for(let element in names) 
    {
        tab[element] =  names[element] + n;
    }

    return tab;
}

const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
}
function greeting(name) 
{
    let message = "Hi! I'm a guest.";

    for(let guest in GUEST_LIST) 
    {
        if(guest === name)
        {
            message = `Hi! I'm ${guest}, and I'm from ${GUEST_LIST[guest]}`;
            break;
        }
    }

    return message;
}
