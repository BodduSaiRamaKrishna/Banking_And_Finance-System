def sdp_90():
    sum = 0
    print("Hello!")
    print("Welcome to Rupee Banking and Finance Systems. We Guide You !")
    print("We would like you to register in our portal")
    print("Can I know your name?")
    name = input("Enter your name:")
    print("Hello!!",name)
    print("Can I know where are you from",name)
    address = input("Enter your address details: ")
    print("Enter your mobile number")
    mobilenum = int(input())
    print("Create a password which contains alphanumeric characters of min length 8")
    password = input()
    print("Thank you for registering in our Online Banking Portal")
    print("I would like to display all the facilities provided by our Banking Portal")
    print("What do u prefer to perform?")
    print("Credit or Debit")
    Trans = input()
    if Trans =="credit":
        print("Please Enter the Pin")
        Pin = int(input())
        if Pin >= 1000 and Pin<=9999:
            print("Enter the Amount")
            amount = int(input())
            sum=sum+amount;
            print("---------------------------------------------------------------------------------")
            print(" \tRupee Banking and Finance Systems")
            print("")
            print("\t Thank U for Crediting Money Using our Online Banking Portal")
            print("\t",amount,"/- is credited into your account.")
            print("\t Welcome")
            print("---------------------------------------------------------------------------------")
        else:
            print("Please Enter the Correct Pin")
    if  Trans == "debit":
        print("Please Enter the Pin")
        Pin = int(input())
        if Pin >= 1000 and Pin<=9999:
            print("Enter the Amount")
            amount = int(input())
            sum=sum+amount;
            print("---------------------------------------------------------------------------------")
            print(" \tRupee Banking and Finance Systems")
            print("")
            print("\t Thank U for Debiting Money Using our Online Banking Portal")
            print("\t",amount,"/- is Debited from your account.")
            print("\t Welcome")
            print("---------------------------------------------------------------------------------")
        else:
            print("Please Enter the Correct Pin")
