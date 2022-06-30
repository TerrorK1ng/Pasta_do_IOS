import java.util.Scanner;
public class exerciciosEAD {
    public static void main(String[] args) {
        /* Exercicio 1 */
        /*Scanner Soma = new Scanner(System.in);
        
        System.out.println("Digite um numero abaixo para fazer uma soma");
        double num1 = Soma.nextDouble();

        System.out.println("Digite um numero abaixo para fazer uma soma");
        double num2 = Soma.nextDouble();

        double fazerSoma = num1 + num2;
        System.out.println("A soma entre os 2 Numeros digitados foi: " +fazerSoma);*/

        /* Exercicio 2 */
        /*Scanner convertMettersInCentimeter = new Scanner(System.in);

        System.out.println("Digite um valor em Metros para ser convertido para Centimetros");

        double mettersValue = convertMettersInCentimeter.nextDouble();

        double convert = mettersValue * 100;

        System.out.println("valor em Centimetros: " +convert);*/

        /* Exercicio 3 */
        Scanner verificarParOuImpar = new Scanner(System.in);
        System.out.println("Digite um numero para verificar se e Par ou Impar");

        int numeroDigitado = verificarParOuImpar.nextInt();

        if((numeroDigitado % 2) == 0) {
            System.out.println("O numero " + numeroDigitado + ", e Par");
        }
        else {
            System.out.println("O numero " + numeroDigitado + ", e Impar");
        }

        /* Exercicio 4 */
        

    }
}
