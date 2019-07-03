var first_num = +prompt('Введите число - которое быдем возводить в степень:');
var second_num = +prompt('Введите степень, в которую будем возводить число:');
var def = 1;

for (var i = second_num; i; i--) {
    def *= first_num;
}

alert ('"for" ответ: ' + def);

def = 1;
var whi_i = 0;

while (whi_i < second_num) {
  def *= first_num;
  whi_i++;
}

alert ('"while" ответ: ' + def);

daf = 1;
var clean = 1;
var do_i = 0;
do {
  def *= clean;
  clean = first_num;
  do_i--;
} while (do_i + 1)

alert ('"do...while" ответ: ' + def);