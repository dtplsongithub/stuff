#include <iostream>
#include <sys/stat.h>
using namespace std;

bool fileExists(string name){
  struct stat buffer;   
  return (stat (name.c_str(), &buffer) == 0); 
}

int main(int argc, char *argv[]) {
  if (argc == 1) {
    cout << "No arguments were given, reading .\\input.txt";
  } else if (argc == 3) {
    
  } else cout << "Invalid number of arguments!";
  return 0;
}