a = list(input("enter the number ").split())
b = list(input('enter the 2nd number ').split())
# a = ['23','45']
# b = ['2','55']
min1= int(a[1])
min2= int(b[1])
h1= int(a[0])
h2= int(b[0])
sumM =(min1+min2)
h=0
if ( sumM >= 60):
    rima=sumM%60
    ho = sumM -rima
    h=int(ho/60)
    sumM=rima

else:
    pass
hower=h+h1+h2
if (hower>24):
    hower= hower-24
print(hower)
print(sumM)
