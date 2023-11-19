function cal() 
{
    let id = document.getElementById("text").value;
    let x = id.length
    let valid = ""
    let sex = ""
    let day = id.substring(0,2)
    let m = id.substring(2,4)
    let y = id.substring(4,6)
    let num = id[9]
    let age = ""
    let allnum = +id.substring(0,6) +id.substring(7,10)
    let checkcontrolnum = allnum % 31
    let controlcharall = "0123456789ABCDEFHJKLMNPRSTUVWXY"
    let lastdigit = id[10]
    let controlchar = controlcharall[checkcontrolnum]

    if (x !== 11)
    {valid = "False, ID should contain 11 characters."}
    
    else if (day < 1 || day > 31 )
    {valid = "False, day is incorrect."}

    else if (m > 12 || m < 1 )
    {valid = "False, month is incorrect."}

    else if (day < 1 || day > 31 && m > 12 || m < 1 )
    {valid = "False, day and month are incorrect."}

    else if (day > 29 && m == 2)
    {valid = "False, day or month is incorrect."}

    else if (day == 31 && (m==4 || m==6 || m == 9 || m==11))
    {valid = "False, day or month is incorrect."}
    
    else if (lastdigit !== controlchar)
    {valid = "False, the control character does not match."}
  
    else
    {valid = "True"}

    
    if (x !== 11)
    {sex = ""}
    
    else if (day < 1 || day > 31 )
    {sex = ""}

    else if (m > 12 || m < 1 )
    {sex = ""}

    else if (day < 1 || day > 31 && m > 12 || m < 1 )
    {sex = ""}
    else if (day > 29 && m == 2)
    {sex = ""}
    else if (day == 31 && (m==4 || m==6 || m == 9 || m==11))
    {sex = ""}
    else if (lastdigit !== controlchar)
    {sex = ""}
    else if (num % 2 == 0)
    {sex = "Female"}

    else
    {sex = "Male"}

    if (x !== 11)
    {age = ""}
    
    else if (day < 1 || day > 31 )
    {age = ""}

    else if (m > 12 || m < 1 )
    {age = ""}

    else if (day < 1 || day > 31 && m > 12 || m < 1 )
    {age = ""}
    else if (day > 29 && m == 2)
    {age = ""}
    else if (day == 31 && (m==4 || m==6 || m == 9 || m==11))
    {age = ""}
    else if (lastdigit !== controlchar)
    {age = ""}
    else if (id[6] == "A")
    {age = 23-y}
    else if(id[6] == "-")
    {age = 100-y+23}
    else if(id[6] == "+")
    {age = 200-y+23}
            
    document.getElementById("a").innerHTML = id;
    document.getElementById("b").innerHTML = valid; 
    document.getElementById("c").innerHTML = sex;
    document.getElementById("d").innerHTML = age;
    
}

function specificage()
{
    let id = document.getElementById("text").value;
    let x = id.length;
    let day = id.substring(0,2)
    let m = id.substring(2,4)
    let y = id.substring(4,6)
    let td = new Date();
    let birth = ""

    if (id[6] == "A")
    {birth = +20+y+-+m+-+day}
    else if(id[6] == "-")
    {birth = +19+y+-+m+-+day}
    else if(id[6] == "+")
    {birth = +18+y+-+m+-+day}

    let bod = new Date(birth);
    let years = td.getFullYear() - bod.getFullYear();
    let months = td.getMonth() - bod.getMonth();
    let days = td.getDate() - bod.getDate();
    let allnum = +id.substring(0,6) +id.substring(7,10)
    let checkcontrolnum = allnum % 31
    let controlcharall = "0123456789ABCDEFHJKLMNPRSTUVWXY"
    let lastdigit = id[10]
    let controlchar = controlcharall[checkcontrolnum]
    if (x !== 11)
    {years = "" ; months = ""; days = ""}
    
    else if (day < 1 || day > 31 )
    {years = "" ; months = ""; days = ""}
    else if (m > 12 || m < 1 )
    {years = "" ; months = ""; days = ""}
    else if (day < 1 || day > 31 && m > 12 || m < 1 )
    {years = "" ; months = ""; days = ""}
    else if (day > 29 && m == 2)
    {years = "" ; months = ""; days = ""}
    else if (day == 31 && (m==4 || m==6 || m == 9 || m==11))
    {years = "" ; months = ""; days = ""}
    else if (lastdigit !== controlchar)
    {years = "" ; months = ""; days = ""}
    else
    {if (months < 0 || (months === 0 && td.getDate() < bod.getDate())) 
    {
        years--;
        months += 12;
    }
    if (days < 0) 
    {
        let lastmonth = new Date(td.getFullYear(), td.getMonth(), 0).getDate();
        days = lastmonth - bod.getDate() + td.getDate();
        months--;
    }
    }
    document.getElementById("Year").innerHTML = years
    document.getElementById("Month").innerHTML = months
    document.getElementById("Day").innerHTML = days
    
}

function create()
{

    let id = document.getElementById("text2").value;
    
    let x = id.length
    let valid = ""
    let day = id.substring(0,2)
    let m = id.substring(2,4)
    
    let allnum = +id.substring(0,6) +id.substring(7,10)
    let checkcontrolnum = allnum % 31
    let controlcharall = "0123456789ABCDEFHJKLMNPRSTUVWXY"
    
    let controlchar = controlcharall[checkcontrolnum]

    if (x !== 10)
    {valid = "ID is wrong"}

    else if (day < 1 || day > 31 )
    {valid = "False, day is incorrect."}

    else if (m > 12 || m < 1 )
    {valid = "False, month is incorrect."}

    else if (day < 1 || day > 31 && m > 12 || m < 1 )
    {valid = "False, day and month are incorrect."}

    else if (day > 29 && m == 2)
    {valid = "False, day or month is incorrect."}

    else if (day == 31 && (m==4 || m==6 || m == 9 || m==11))
    {valid = "False, day or month is incorrect."}
    
           
    else
    {valid = controlchar}

    document.getElementById("f").innerHTML = id;
    document.getElementById("g").innerHTML = valid;

}
