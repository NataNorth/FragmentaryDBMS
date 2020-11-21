package com.example.db.dto.column;

import com.example.db.database.entities.Column;
import com.example.db.database.entities.types.Mapper;
import com.example.db.entities.Column.ColumnEntity;
import com.example.db.entities.Table.TableEntity;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
@AllArgsConstructor
public class ColumnDto {
    private String name;
    private String type;

    public static Column toEntity(ColumnDto dto) {
        return new Column(dto.getName(), Mapper.toType(dto.getType()));
    }

    public static ColumnDto fromEntity(Column column) {
        return new ColumnDto(column.getName(), column.getType().toString());
    }

    public static List<ColumnDto> fromEntities(List<Column> columns) {
        return columns.stream()
                .map(ColumnDto::fromEntity)
                .collect(Collectors.toList());
    }

    public static List<Column> toEntities(List<ColumnDto> dtos) {
        return dtos.stream()
                .map(ColumnDto::toEntity)
                .collect(Collectors.toList());
    }

    public static ColumnDto fromEntity(ColumnEntity column) {
        return new ColumnDto(column.getName(), column.getType().toString());
    }

    public static List<ColumnDto> fromEntitiesPostgres(List<ColumnEntity> columns) {
        return columns.stream()
                .map(ColumnDto::fromEntity)
                .collect(Collectors.toList());
    }

    public static ColumnEntity toEntityPostgres(ColumnDto dto, TableEntity table) {
        ColumnEntity columnEntity = new ColumnEntity();
        columnEntity.setName(dto.getName());
        columnEntity.setName(dto.getType());
        columnEntity.setTable(table);
        return columnEntity;
    }

    public static List<ColumnEntity> toEntitiesPostgres(List<ColumnDto> dtos, TableEntity table) {
        return dtos.stream()
                .map(column -> toEntityPostgres(column, table))
                .collect(Collectors.toList());
    }

}
