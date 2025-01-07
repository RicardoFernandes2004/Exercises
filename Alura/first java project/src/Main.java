import java.io.Console;
import java.io.IOException;

public class Main {
    public static void main(String[] args) throws IOException {

        System.out.println("Welcome to Screen Match");
        System.out.println("Filme: Top Gun: Maverick");

        String movieName = "Top Gun: Maverick";
        int released = 2022;
        System.out.println("Released" + released);
        boolean included = false;
        double score = 4.97;

        double averageScore = (8.6 + 6.4 + 7) / 3;
        averageScore = (int) (averageScore);
        System.out.println(averageScore);


        String sinopse;
        sinopse = """ 
                filme clichê 
                
                """ + released;

        System.out.println(sinopse);

        // casting
        int classification;
        classification = (int) (averageScore /2);
        System.out.println(classification);










        /*
        exercises

        Fahrenheit
        int temp = Integer.parseInt(System.console().readLine());
        double fah = (temp * 1.8) + 32;
        System.out.println(fah);

        Avg Score
        double score1 = Integer.parseInt(System.console().readLine());
        double score2 = Integer.parseInt(System.console().readLine());
        double avg = (score1 + score2)/2;
        System.out.println(avg);

        venda

        double precoProduto = 8.90;
        int quantidade = 5;
        double valorTotal = precoProduto * quantidade;
        System.out.println(valorTotal);


        cambio
        double valorEmDolar = 6.2;
        double valorEmReal = valorEmDolar * 6.30;
        System.out.println(valorEmReal);


        double precoOriginal = 45.90;
        double percentualDesconto = 0.90;
        System.out.println(precoOriginal * percentualDesconto);
        */
    }
}