def run():
            import random
            s=['hello','treasure','fighter','laptop','carrom','italy','machine','propose','umbrella','bottle','notebook']
            b=random.choice(s)
            str=""
            for i in b:
                if i in "aeiouAEIOU":
                    str+=i
                else:
                    str+="_"
            print(str)
            print("guess the letters from consonants and fill the '_'")
            i=0
            while(i<5):
                a=input("Enter a consonant to guess the word:")
                l=[]
                if a in b:
                    print("match successful!")
                else:
                    print("wrong guess....try again")
                    i+=1
                for j in str:
                    l.append(j)
                for g in b:
                    for h in l:
                        if h=='_':
                            w=l.index(h)
                            if b[w]==a:
                                l[w]=a
                str=""
                for k in l:
                    str+=k

                if str==b:
                    print("congratulations you got it correct!!")
                    break

                else:
                    print(str)
            print(f'correct word is {b}')
run()            
