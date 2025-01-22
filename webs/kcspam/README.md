# kcspam
what is kcspam?
kcspam is an esolang that looks like you are spamming your keyboard

how to use kcspam?
to run a file with the command line:
```
kcspam -i [file]
```

or:
```cpp
kcinterpreter(filename);
// or
kcinterpreterfromstring("wewqwew");
```

commands
|thing|action|description|
|-|-|-|
|1 key to the left|move memory pointer to the left|
|1 key to the right|same thing but for the right|
|go 1 row upwards|add|adds to current memory address by 1|
|go 1 row downwards|subtract|same thing but subtracts|
|shift change, go 1 row upwards|multiply|multiply by value in memory next to current memory address|
|shift change, go 1 row downwards|subtract|same thing but subtracts|
|shift change, 3 keys to the left|start repeating code|will repeat the code in () x amount of times, x being the value stored in the memory address at that time|
|shift change, 3 keys to the right|end repeating code||
|shift change, same key|wait for input||
|2 rows upwards|output as integer|output value at current memory address|
|shift change, 2 rows upwards|output as char|output value at curent memory address but as char!!!!!!!1111|