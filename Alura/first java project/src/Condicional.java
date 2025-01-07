public class Condicional {
    public static void main(String[] args) {
        int released = 2022;
        boolean included = false;
        double score = 4.97;
        String tipoPlano = "plus";


        if (released >= 2022){
            System.out.println("filme lançamento");
        } else {
            System.out.println("filme veio");
        }

        if (included || (tipoPlano.equals("plus") )){
            System.out.println("filme liberado");
        }else{
            System.out.println("PAGUE O ALUGUEL");
        };


    }
}
