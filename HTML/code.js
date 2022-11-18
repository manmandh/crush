<script type="text/javascript">
    function createHeart(sourceId, resultId) {
        objSource = window.document.getElementById(sourceId);
        objResult = window.document.getElementById(resultId);

        if (objSource.value.length == 0) {
            alert("Vui lòng nhập nội dung cần tạo trái tim!");
            return false;
        }

        string = objSource.value;

        heart = "";
        heart += "_________" + partString(string, 8) + "____________" + partString(string, 9) + "\n";
        heart += "______" + partString(string, 12) + "_______" + partString(string, 15) + "\n";
        heart += "____" + partString(string, 17) + "___" + partString(string, 18) + "\n";
        heart += "___" + partString(string, 41) + "\n";
        heart += "__" + partString(string, 44) + "\n";
        heart += "_" + partString(string, 46) + "\n";
        heart += "_" + partString(string, 46) + "\n";
        heart += partString(string, 47) + "\n";
        heart += partString(string, 47) + "\n";
        heart += partString(string, 46) + "\n";
        heart += partString(string, 45) + "\n";
        heart += "_" + partString(string, 43) + "\n";
        heart += "__" + partString(string, 41) + "\n";
        heart += "____" + partString(string, 38) + "\n";
        heart += "______" + partString(string, 34) + "\n";
        heart += "_________" + partString(string, 28) + "\n";
        heart += "____________" + partString(string, 22) + "\n";
        heart += "______________" + partString(string, 18) + "\n";
        heart += "_________________" + partString(string, 13) + "\n";
        heart += "___________________" + partString(string, 9) + "\n";
        heart += "_____________________" + partString(string, 6) + "\n";
        heart += "______________________" + partString(string, 4) + "\n";
        heart += "_______________________" + partString(string, 2) + "\n";

        objResult.value = heart;
    }

    function partString(string, num) {
        if (string.length >= num)
            return string.substring(0, num);

        repeat = Math.ceil(num / string.length);

        newString = "";

        for (i = 0; i < repeat; i++)
            newString += string;

        return newString.substring(0, num);
    }
</script>
<p align="center">
    <br>
    <input id="text" name="text" size="37" placeholder='Nhập nội dung cần làm thành hình trái tim'>
</p>
<p align="center">
    <button name="Create Heart" accesskey="g" onclick="return createHeart('text', 'result');" value="Tạo trái tim" type="button">Tạo trái tim</button>
</p>
<p align="center">Copy hình vừa tạo thôi</p>
<textarea cols="45" rows="23" readonly="readonly" wrap="OFF" id="result" onclick="this.focus(); this.select();"></textarea>
<style>
    input {
        display: block;
        width: 100%;
        padding: 14px 20px;
        outline: 0;
        border: 0;
        border-radius: .25rem;
        font-size: 14px;
        background-color: #f3f6f9;
        height: 3em;
    }
    
    button:active {
        border: 0
    }
    
    .page-wrapper {
        height: 80vh
    }
</style>
  
 
 
 

