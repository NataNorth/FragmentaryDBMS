package com.example.db.dto.table;

import com.example.db.dto.column.ColumnDto;
import com.example.db.database.entities.Column;
import com.example.db.database.entities.Table;
import com.example.db.dto.database.DBCreationDto;
import com.example.db.entities.Database.DatabaseEntity;
import com.example.db.entities.Table.TableEntity;
import lombok.Data;

import java.util.List;
import java.util.stream.Collectors;

@Data
public class TableCreationDto {
    private String name;
    private List<ColumnDto> columns;

    public static Table toEntity(TableCreationDto dto) {
        List<Column> columns = dto.getColumns()
                .stream()
                .map(ColumnDto::toEntity)
                .collect(Collectors.toList());
        return new Table(dto.getName(), columns);
    }

    public static TableEntity toEntityPostgres(TableCreationDto dto, DatabaseEntity db) {
        TableEntity table = new TableEntity();
        table.setName(dto.getName());
        table.setColumns(ColumnDto.toEntitiesPostgres(dto.getColumns(), table));
        table.setDatabase(db);
        return table;
    }

    public static List<TableEntity> toEntitiesPostgres(List<TableCreationDto> dtos, DatabaseEntity db) {
        return dtos.stream()
                .map(dto -> toEntityPostgres(dto, db))
                .collect(Collectors.toList());
    }
}
