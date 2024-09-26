/*vamos a modificar formato de la moneda a dolares americanos y coloca el signo 
de pesos a la izquierda */

export const formatPrice = (price: number) => {
 return new Intl.NumberFormat('en-US',{
     style: 'currency', currency:'USD'
 }).format(price)
}
