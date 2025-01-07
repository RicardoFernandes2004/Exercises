import java.util.Random;
import java.util.Scanner;

public class GuessGame {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        int aleatorio = random.nextInt(100);
        int guess = 0;
        for (int i = 0; i < 5; i++) {
            guess = scanner.nextInt();
            if (guess == aleatorio){
                System.out.println("Voce venceu!");
                break;
            }else{
                if (guess > aleatorio){
                    System.out.println("O numero escolhido é maior que o correto");
                }else {
                    System.out.println("0 numero escolhido é menor que o correto");
                }
            }

        }

    }
}
