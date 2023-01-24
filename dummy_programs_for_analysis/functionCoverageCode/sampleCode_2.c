#include <stdio.h>

dummy_call(int b)
{
    exit(b);
}

main ()
{
    int a=0;
    if (a==0)
    {
        dummy_call(0);
    }
    else dummy_call(0);
}