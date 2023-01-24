#include <stdio.h>
#include <stdlib.h>

deciding_function(int d, int e, int f)
{
    if (d==1)
    {
        int g = d;
    }
    if (e==1)
    {
        return 1;
    } 
    if (f==1)
    {
        exit(0);
    }
}

end_function(int p)
{
    int q = p;
}

main ()
{
    int a=0,b=0,c=0;
    printf("Enter the numbers: ");
    scanf("%d,%d,%d", &a,&b,&c);
    end_function(a);
    deciding_function(a,b,c);
}