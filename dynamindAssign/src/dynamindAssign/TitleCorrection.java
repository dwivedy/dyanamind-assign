package dynamindAssign;

import java.util.Arrays;
import java.util.stream.Collectors;

public class TitleCorrection {

	public static void main(String[] args) {

		String[] input = { "breaki3ng news5:", "1A 1circle is round!" };

		String output = "Breaking News: A Circle Is Round!";

		String result = Arrays.stream(input).map(str -> capitalizeWordAndRemoveNumber(str))
				.collect(Collectors.joining(" ")).toString();

		System.out.println("Result: "+result);

		System.out.println(result.equals(output));

	}

	public static String capitalizeWordAndRemoveNumber(String str) {
		String words[] = str.replaceAll("\\d", "").split("\\s");
		String capitalizeWord = "";
		for (String word : words) {
			String first = word.substring(0, 1);
			String afterfirst = word.substring(1);
			capitalizeWord += first.toUpperCase() + afterfirst + " ";
		}
		return capitalizeWord.trim();
	}

}
