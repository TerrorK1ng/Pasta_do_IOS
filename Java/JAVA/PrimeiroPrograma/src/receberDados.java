import java.util.Scanner;
public class receberDados {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);

        System.out.println("Digite Seu Nome abaixo para somar a media de suas Notas: ");
        
        String valorEntrada = entrada.nextLine();
        System.out.println("Ola " + valorEntrada + ", seja bem vindo.");

        System.out.println("Digite sua nota de HTML abaixo: ");
        double nota1 = entrada.nextDouble();

        System.out.println("Digite sua nota de CSS abaixo: ");
        double nota2 = entrada.nextDouble();

        System.out.println("Digite sua nota de Javascript abaixo: ");
        double nota3 = entrada.nextDouble();

        System.out.println("Digite sua nota de React abaixo: ");
        double nota4 = entrada.nextDouble();

        double mediaNotas = (nota1 + nota2 + nota3 + nota4) / 4;
        System.out.println("A media da sua nota foi: " +mediaNotas);

        if(mediaNotas >= 7.5) {
            System.out.println("Parabens, Voce foi aprovado!");       
        }
        else if(mediaNotas >= 7) {
            System.out.println("Foi por pouco, Voce tirou 7, na proxima voce consegue "); 
        }
        else {
            System.out.println("Vai estudar burrao, Voce foi reprovado com sucesso!"); 
        }
    }
}
