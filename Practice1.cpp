#include<stdio.h> 

int main (){

int arr[10], i=0;

for(i=0; i<10; i++){
printf("Enter 10 Elements:");
scanf("%d", &arr[i]);
}
for(i=0; i<10; i++){
printf("%d", arr[i]);
}

printf("\n");

return 0;
}
