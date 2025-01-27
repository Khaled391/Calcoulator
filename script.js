document.addEventListener("DOMContentLoaded", function() {
  let currentInput = "";  // تعريف المتغير

  // دالة لعرض النص في الـ h1
  function updateDisplay(value) {
      document.querySelector("h1").textContent = value;
  }

  // تحديث currentInput عند الضغط على الأزرار
  document.getElementById("one").addEventListener("click", function() {
      currentInput += "1";
      updateDisplay(currentInput);
  });

  document.getElementById("two").addEventListener("click", function() {
      currentInput += "2";
      updateDisplay(currentInput);
  });

  document.getElementById("three").addEventListener("click", function() {
      currentInput += "3";
      updateDisplay(currentInput);
  });

  document.getElementById("four").addEventListener("click", function() {
      currentInput += "4";
      updateDisplay(currentInput);
  });

  document.getElementById("five").addEventListener("click", function() {
      currentInput += "5";
      updateDisplay(currentInput);
  });

  document.getElementById("six").addEventListener("click", function() {
      currentInput += "6";
      updateDisplay(currentInput);
  });

  document.getElementById("seven").addEventListener("click", function() {
      currentInput += "7";
      updateDisplay(currentInput);
  });

  document.getElementById("eight").addEventListener("click", function() {
      currentInput += "8";
      updateDisplay(currentInput);
  });

  document.getElementById("nine").addEventListener("click", function() {
      currentInput += "9";
      updateDisplay(currentInput);
  });

  document.getElementById("zero").addEventListener("click", function() {
      currentInput += "0";
      updateDisplay(currentInput);
  });

  // العمليات الحسابية
  document.getElementById("devesion").addEventListener("click", function() {
      if (currentInput !== "" && !["+", "-", "*", "/"].includes(currentInput.slice(-1))) {
          currentInput += "÷";
          updateDisplay(currentInput);
      }
  });

  document.getElementById("multiplication").addEventListener("click", function() {
      if (currentInput !== "" && !["+", "-", "*", "/"].includes(currentInput.slice(-1))) {
          currentInput += "×";
          updateDisplay(currentInput);
      }
  });

  document.getElementById("addition").addEventListener("click", function() {
      if (currentInput !== "" && !["+", "-", "*", "/"].includes(currentInput.slice(-1))) {
          currentInput += "+";
          updateDisplay(currentInput);
      }
  });

  document.getElementById("subtraction").addEventListener("click", function() {
      if (currentInput !== "" && !["+", "-", "*", "/"].includes(currentInput.slice(-1))) {
          currentInput += "-";
          updateDisplay(currentInput);
      }
  });

  document.getElementById("pi").addEventListener("click", function() {
      currentInput += "π";
      updateDisplay(currentInput);
  });

  document.getElementById("percent").addEventListener("click", function() {
      currentInput += "%";
      updateDisplay(currentInput);
  });

  document.getElementById("dot").addEventListener("click", function() {
      currentInput += ".";
      updateDisplay(currentInput);
  });

  // زر "=" لحساب النتيجة
  document.getElementById("equal").addEventListener("click", function() {
      let expression = currentInput;
      expression =expression.replace("÷", "/")
                            .replace("×", "*")
                            .replace("π", Math.PI);

      try {
          let result = eval(expression);  // حساب النتيجة
          updateDisplay(result);
          currentInput = result.toString();  // تحديث المدخلات بالنتيجة
      } catch (e) {
          updateDisplay("خطأ");
      }
  });

  // زر "C" لمسح المدخلات
  document.getElementById("clear").addEventListener("click", function() {
      currentInput = "";  // مسح المدخلات
      updateDisplay(currentInput);
  });

  // زر "Backspace" لحذف آخر حرف
  document.getElementById("backspace").addEventListener("click", function() {
      currentInput = currentInput.slice(0, -1);  // حذف آخر حرف
      updateDisplay(currentInput);
  });
});






















