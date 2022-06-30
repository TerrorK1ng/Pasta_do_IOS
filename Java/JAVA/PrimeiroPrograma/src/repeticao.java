import java.util.Scanner;
public class repeticao {
    public static void main(String[] args) {
        Scanner Numero = new Scanner(System.in);
        System.out.println("Digite um Numero par abaixo: ");
        int numeroDigitado = Numero.nextInt();

        while(numeroDigitado % 2 == 0) {
            System.out.println();
        }
    }
}