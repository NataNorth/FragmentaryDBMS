package entities.types;

import java.io.Serializable;

public class CharType implements Type, Serializable {
    private Character data;

    public CharType() {
        this.data = '-';
    }

    @Override
    public TypeName getName() {
        return TypeName.CHAR;
    }

    @Override
    public void setData(Object data) {
        if (!data.getClass().equals(Character.class)) {
            throw new WrongTypeException(getName());
        }
        this.data = (Character) data;
    }

    @Override
    public String getData() {
        return this.data.toString();
    }

    @Override
    public int compareTo(Type o) {
        CharType t = (CharType) o;
        return this.data.compareTo(t.data);
    }
}
