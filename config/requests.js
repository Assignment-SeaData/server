export const getAll = "SELECT * FROM users";
export const deleteOne = "DELETE FROM users WHERE id = ?";
export const updateOne = "UPDATE users SET full_name = ?, country = ?, city = ?, email = ?, phone_number = ?, job_title = ?, years_of_experience = ? WHERE id = ?";
export const getOneById = "SELECT * FROM users where id = (?)";
export const addOne = "INSERT INTO users (full_name, country, city, email, phone_number, job_title, years_of_experience) VALUES (?,?,?,?,?,?,?)";