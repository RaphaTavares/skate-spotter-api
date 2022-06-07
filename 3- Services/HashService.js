import { hash, compare } from "bcrypt";

class HashService {
    async generateHash(payload) {
        return hash(payload, 8);
  }

    async compareHash(payload, hashed) {
        return compare(payload, hashed);
  }
}

export default new HashService();