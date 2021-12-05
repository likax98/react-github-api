// თუ null ან undefined-ია, 0-ის გამორიცხვა მინდოდა და თემფლეითში ამან ?? არ იმუშავა
export const isEmpty = (value) => value == null;