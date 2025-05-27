from random import *

def randomPolyLogarithmicFunction(polynomial_degree=4,num_poly=0,logarithmic_degree=1,num_log=4,length=3,complexity_level=2):
    stack_checker = [[]*logarithmic_degree]*polynomial_degree
    avaible_nodes = length
    final_string = ""
    final_array = []
    availble_polynomial = [x for x in range(0,polynomial_degree)]
    for x in range(num_poly):
        randomElement = randint(0,len(availble_polynomial)-1)
        randomcoefficient = randint(1,6)
        coefficient = availble_polynomial[randomElement]
        if coefficient != 0:
            final_array.append((coefficient,str(randomcoefficient)+"x^"+str(coefficient)))
        elif coefficient == 1:
            final_array.append((coefficient,str(randomcoefficient)+"x"))
        else:
            final_array.append((coefficient,str(randomcoefficient)))
        availble_polynomial.pop(randomElement)
            
    if(len(availble_polynomial)>=1 and availble_polynomial[0] != 0):
        availble_logarithm = [x for x in range(0,polynomial_degree+1)]
    else:
        availble_logarithm = [x for x in range(1,polynomial_degree+1)]
    
    for x in range(num_log):
        randomElement = randint(0,len(availble_logarithm)-1)
        randomcoefficient = randint(1,6)
        coefficient = availble_logarithm[randomElement]
        if coefficient != 0:
            final_array.append((coefficient,"(log(x))^"+str(coefficient)))
        elif coefficient == 1:
            final_array.append((coefficient,"log(x)"))
        else:
            final_array.append((coefficient,str(randomcoefficient)))
        availble_logarithm.pop(randomElement)
    final_array.sort(reverse=True)
    for x in final_array:
        final_string += x[1] + "+"
    return final_string[0:len(final_string)-1]

print(randomPolyLogarithmicFunction(5,2,1,1,5))

"""Non logarithmic polylogarithm """