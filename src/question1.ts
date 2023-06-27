function replaceStringVariables(
	fullString: string,
	data: { [x: string]: string }
) {
	const regex = /\${(\w+)}/g;
	const missingFields: string[] = [];
	const replacedString = fullString.replace(/^(?!#)(.*)$/gm, (line) => {
		return line.replace(regex, (match, key) => {
			if (!data[key]?.length) {
				missingFields.push(match.substring(1));
				return match; // Return the original match if the value is missing
			}
			return `"${data[key]}"`;
		});
	});

	if (missingFields.length) {
		console.log(
			`\nFollowing environment variables in the template file
			 
			 do not contain values from the remote source.
			 
			 Remove them from the env file or provide a value in the
			 
			 Hashicorp Vault.\n
			 
			 ${missingFields.join("\n")}`
		);

		throw new Error("internal::INVALID_TEMPLATE_OR_SECRETS");
	}

	return replacedString;
}

const output = replaceStringVariables(
	"PG_DATABASE=${DB}\n#PG_HOST=${PG_HOST}",
	{
		DB: "postgres",
		PG_HOST: "localhost",
	}
);

console.log(output);
