package com.example.db.dto.row;

import com.example.db.database.entities.types.Type;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class RowDto {
    private List<String> cells;

    public static List<RowDto> fromEntities(List<List<String>> rows) {
        return rows.stream()
                .map(RowDto::new)
                .collect(Collectors.toList());
    }

    public static RowDto fromEntity(List<Type> row) {
        return new RowDto(row
                .stream()
                .map(Type::getData)
                .collect(Collectors.toList()));
    }

//    public static RowDto fromEntityPostgres(Row row) {
//        return new RowDto(
//                row.getRow().stream()
//                .map(BaseType::getData)
//                .collect(Collectors.toList())
//        );
//    }

//    public static List<RowDto> fromEntitiesPostgres(List<Row> rows) {
//        return rows.stream()
//                .map(RowDto::fromEntity)
//                .collect(Collectors.toList());
//    }
}
