/**
 * 1 = parede
 * 0 = caminho
 * 2 = jogador
 * 10 = proxima fase
 */

 
fase_limpa = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    
]
fase_1 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,0,1,1,1,1],
    [1,0,0,0,1,1,0,1,1,1,1],
    [1,1,1,0,1,1,0,1,1,1,1],
    [1,1,1,0,1,1,0,1,1,1,1],
    [1,1,1,0,1,1,0,0,0,0,1],
    [1,1,1,0,0,0,0,1,1,0,1],
    [1,1,1,1,1,1,0,1,1,0,1],
    [1,1,1,1,1,1,0,0,0,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_2 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_3 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_4 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_5 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_6 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_7 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_8 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_9 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]
fase_10 = [
    [1,1,1,1,1,1,1,1,1,1,1],
    [1,2,0,0,0,0,0,0,0,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,1,1,1,1,1,1,1,0,1],
    [1,0,0,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,1,1,0,1],
    [1,1,1,0,1,1,1,0,0,0,1],
    [1,1,1,0,1,1,1,0,1,1,1],
    [1,1,1,0,0,0,0,0,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,1],
    [1,1,1,1,1,1,0,1,1,10,1],
    [1,1,1,1,1,1,1,1,1,1,1]
]