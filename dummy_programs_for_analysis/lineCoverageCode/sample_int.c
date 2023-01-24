#include <stdio.h>
#include <stdlib.h>

dummy_call(int b)
{
    exit(b);
}

int alt_sample_int(int a)
{
    int sample_int;
    if (a==1)
    {
        sample_int = 0;
        return sample_int;
    }
    dummy_call(0);}

main()
{
    int input;
    printf("Enter the value:");
    scanf("%d", &input);
    int returned_val = alt_sample_int(input);
    printf("The returned val is %d", returned_val);
}